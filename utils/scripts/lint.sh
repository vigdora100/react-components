#!/bin/bash
set -x
set -e

# Lint styled-components css
stylelint './src/**/*.js';

# Lint JS
eslint -c '../../.eslintrc.json' './src/**/*.js';
