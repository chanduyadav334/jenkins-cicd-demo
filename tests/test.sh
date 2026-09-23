#!/bin/bash

echo "Running application tests..."

if [ -f app/index.html ]; then
    echo "index.html exists"
else
    echo "index.html missing"
    exit 1
fi

if [ -f app/style.css ]; then
    echo "style.css exists"
else
    echo "style.css missing"
    exit 1
fi

if [ -f app/script.js ]; then
    echo "script.js exists"
else
    echo "script.js missing"
    exit 1
fi

echo "All tests passed!"
