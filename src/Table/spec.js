import React from "react";
import expect from "test/expect";

import Table from ".";
import View from "../core/View";
import Menu from "../Menu";
import Checkbox from "../Checkbox";
import TestUtils from "react-addons-test-utils";

/**
 * These tests require full-mount rendering to ensure our logic is
 * being applied correctly with React-Virtualized.
 */
describe("Table", () => {
  let data;

  beforeEach(() => {
    data = [];

    for (let x = 0; x < 5; x++) {
      data.push({
        id: `ID-${x}`,
        name: `Name ${x}`
      });
    }
  });

  it("applies striped styling to the correct rows if provided", () => {
    expect(
      <Table data={data} striped width={500} height={500}>
        <Table.Column label="Name" dataKey="name" width={50} />
      </Table>,
      "when deeply rendered",
      "to contain",
      <div className="ReactVirtualized__Grid">
        <div className="table_row table_row_zebra">Name 0</div>
        <div className="table_row">Name 1</div>
      </div>
    );
  });

  it("applies className to table if provided", () => {
    const className = "test-class";
    expect(
      <Table data={data} className={className} width={500} height={500}>
        <Table.Column label="Name" dataKey="name" width={50} />
      </Table>,
      "to render as",
      <View className={className} />
    );
  });

  it("applies correct density to both header and body rows if provided", () => {
    const component = TestUtils.renderIntoDocument(
      <Table data={data} density="cozy" width={500} height={500}>
        <Table.Column label="Name" dataKey="name" width={50} />
      </Table>
    );

    const cozyBodyStyling = { height: 32 };
    const cozyHeaderStyling = { height: 40 };

    expect(
      component,
      "to contain",
      <div className="table_row_header" style={cozyHeaderStyling}>
        Name
      </div>
    ).and(
      "to contain",
      <div className="table_row" style={cozyBodyStyling}>
        Name 0
      </div>
    );
  });

  describe("Group Rows", () => {
    it("throws if isGroupRow is defined without groupRowRenderer", () => {
      return expect(
        <Table data={data} isGroupRow={() => true} width={500} height={500}>
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>,
        "when deeply rendered"
      ).then(() => {
        expect(
          console.error.lastCall.args[0],
          "to contain",
          "groupRowRenderer is required if isGroupRow is provided."
        );
      });
    });

    it("throws if groupRowRenderer is defined without isGroupRow", () => {
      return expect(
        <Table
          data={data}
          groupRowRenderer={() => "Test"}
          width={500}
          height={500}
        >
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>,
        "when deeply rendered"
      ).then(() => {
        expect(
          console.error.lastCall.args[0],
          "to contain",
          "isGroupRow is required if groupRowRenderer is provided."
        );
      });
    });

    it("warns if striped is defined with isGroupRow", () => {
      return expect(
        <Table
          striped
          data={data}
          isGroupRow={rowIndex => rowIndex === 1}
          groupRowRenderer={() => "Test"}
          width={500}
          height={500}
        >
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>,
        "when deeply rendered"
      ).then(() => {
        expect(
          console.warn.lastCall.args[0],
          "to contain",
          "Striped table styling should not be used with grouped rows."
        );
      });
    });

    it("displays group rows correctly if provided", () => {
      expect(
        <Table
          data={data}
          isGroupRow={rowIndex => rowIndex === 1}
          groupRowRenderer={() => {
            return {
              label: "Test Label",
              value: "Test Value"
            };
          }}
          width={500}
          height={500}
        >
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>,
        "when deeply rendered",
        "to contain",
        <div className="ReactVirtualized__Grid">
          <div className="table_row">Name 0</div>
          <div className="table_row_group">
            <div className="cell">
              Test Label&nbsp;
              <span className="cell_description">Test Value</span>
            </div>
          </div>
          <div className="table_row">Name 2</div>
        </div>
      );
    });
  });

  describe("Column", () => {
    it("header contains sortable classes if sorting is enabled", () => {
      const component = TestUtils.renderIntoDocument(
        <Table
          data={data}
          width={500}
          height={500}
          sortBy="name"
          sortDirection="ASC"
          onSort={() => {}}
        >
          <Table.Column label="Name" dataKey="name" width={50} disableSort />
          <Table.Column label="Sortable Name" dataKey="name" width={50} />
        </Table>
      );

      expect(component, "to contain", <div className="cell">Name</div>).and(
        "to contain",
        <div className="cell">
          <button className="cell_sortable ascending">Sortable Name</button>
        </div>
      );
    });

    it("applies truncation correctly if provided", () => {
      const component = TestUtils.renderIntoDocument(
        <Table data={data} width={500} height={500}>
          <Table.Column label="Name" dataKey="name" width={50} />
          <Table.Column
            label="Non-Truncated Name"
            dataKey="name"
            width={50}
            truncate={false}
          />
        </Table>
      );

      expect(
        component,
        "to contain",
        <div className="cell cell_truncate">Name 0</div>
      ).and("to contain", <div className="cell">Name 0</div>);
    });
  });

  describe("Checkbox Column", () => {
    it("displays checkboxes if CheckboxColumn is provided", () => {
      const component = TestUtils.renderIntoDocument(
        <Table data={data} width={500} height={500} selectedData={[]}>
          <Table.CheckboxColumn onSelection={() => {}} />
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>
      );
      expect(
        component,
        "to contain",
        <div className="table_row_header">
          <div className="cell">
            <Checkbox />
          </div>
          <div className="cell">Name</div>
        </div>
      ).and(
        "to contain",
        <div className="table_row">
          <div className="cell">
            <Checkbox />
          </div>
          <div className="cell">Name 0</div>
        </div>
      );
    });

    it("does not display select all if allowSelectAll is false", () => {
      expect(
        <Table data={data} width={500} height={500} selectedData={[]}>
          <Table.CheckboxColumn onSelection={() => {}} allowSelectAll={false} />
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>,
        "when deeply rendered",
        "not to contain",
        <div className="table_row_header">
          <div className="cell">
            <Checkbox />
          </div>
        </div>
      );
    });

    it("disables selection for disabled rows correctly", () => {
      const component = TestUtils.renderIntoDocument(
        <Table
          data={data}
          width={500}
          height={500}
          selectedData={[]}
          isRowDisabled={rowIndex => rowIndex === 1}
        >
          <Table.CheckboxColumn onSelection={() => {}} />
          <Table.Column label="Name" dataKey="name" width={50} />
        </Table>
      );

      expect(
        component,
        "to contain",
        <div className="table_row">
          <div className="cell">
            <Checkbox disabled={false} />
          </div>
          <div className="cell">Name 0</div>
        </div>
      )
        .and(
          "to contain",
          <div className="table_row">
            <div className="cell">
              <Checkbox disabled />
            </div>
            <div className="cell">Name 1</div>
          </div>
        )
        .and(
          "to contain",
          <div className="table_row">
            <div className="cell">
              <Checkbox disabled={false} />
            </div>
            <div className="cell">Name 2</div>
          </div>
        );
    });
  });

  describe("Menu Column", () => {
    it("displays menu in header row if MenuColumn is provided with headerMenuItems", () => {
      const component = TestUtils.renderIntoDocument(
        <Table data={data} width={500} height={500}>
          <Table.Column label="Name" dataKey="name" width={50} />
          <Table.MenuColumn
            headerMenuItems={() => [
              <Menu.Item key="example">Example</Menu.Item>
            ]}
          />
        </Table>
      );

      expect(
        component,
        "to contain",
        <div className="table_row_header">
          <div className="cell">Name</div>
          <div className="cell">
            <div className="overflow_menu" />
          </div>
        </div>
      ).and(
        "to contain",
        <div className="table_row">
          <div className="cell">Name 0</div>
        </div>
      );
    });

    it("displays menu in body row if MenuColumn is provided with rowMenuItems", () => {
      expect(
        <Table data={data} width={500} height={500}>
          <Table.Column label="Name" dataKey="name" width={50} />
          <Table.MenuColumn
            rowMenuItems={() => [<Menu.Item key="example">Example</Menu.Item>]}
          />
        </Table>,
        "when deeply rendered",
        "to contain",
        <div className="table_row">
          <div className="cell">Name 0</div>
          <div className="cell">
            <div className="overflow_menu" />
          </div>
        </div>
      );
    });
  });
});
