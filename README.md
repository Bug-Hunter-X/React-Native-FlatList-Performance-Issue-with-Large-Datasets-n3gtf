# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native when using FlatList with large datasets.  The app becomes sluggish or unresponsive when rendering a significant number of list items.

## Problem

The provided `MyComponent.js` renders a FlatList with 1000 items.  On lower-end devices or with larger datasets, this can lead to noticeable performance degradation.

## Solution

The `MyComponentSolution.js` file demonstrates a few techniques to improve performance:

* **`windowSize` and `maxToRenderPerBatch`:**  These props are set to optimize the rendering of items.
* **`getItemLayout`:** This prop helps provide optimized layout measurements.
* **Virtualization:** FlatList is already virtualized, but correctly configuring props enhances this.

See the solution file for the implementation details.