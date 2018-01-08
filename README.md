# 🔬speedscope
An interactive web-based viewer for [sampling profiles][0]. An alternative viewer for [FlameGraphs][1].

Given raw profiling data, speedscope allows you to interactively explore the data to get insight into what's slow in your application, or allocating all the memory, or whatever data is represented in the profiling data.

![Example Profile](https://i.imgur.com/bPPI0mz.png)

[0]: https://en.wikipedia.org/wiki/Profiling_(computer_programming)#Statistical_profilers
[1]: https://github.com/brendangregg/FlameGraph

# Usage
Visit https://jlfwong.github.io/speedscope/, then either browse to find a profile file or drag-and-drop one onto the page. The profiles are not uploaded anywhere -- the application is totally in-browser.

## Supported file formats:
There are two file formats currently supported:

1. The folded stack format output by the FlameGraph scripts do: https://github.com/brendangregg/FlameGraph#2-fold-stacks. Example: https://github.com/jlfwong/speedscope/blob/master/sample/perf-vertx-stacks-01-collapsed-all.txt
2. The timeline format output by Chrome developer tools: https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#save. Example: https://github.com/jlfwong/speedscope/blob/master/sample/chrome-timeline.json

## Views

Both of the main views of the applications display flame graphs.

In this view, the horizontal axis represents the "weight" of each stack (most commonly CPU time), and the vertical axis shows you the stack active at the time of the sample.

### 🕰Time Order

In the "Time Order" view (the default), the stacks are ordered left-to-right in the same order as the occurred in the input file, which is usually going to be the chronological order they were recorded in. This view is most helpful for understand the behavior of an application over time, e.g. "first the data is fetched from the database, then the data is prepared for serialization, then the data is serialized to JSON". This is the only flame graph order supported by Chrome developer tools.

### ⬅️Left Heavy

In the "Left Heavy" view, identical stacks are grouped together, regardless of whether they were recorded sequentially. Then, the stacks are sorted so that the heaviest stack for each parent is on the left -- hence "left heavy". This view is useful for understanding where all the time is going in situations where there are hundreds or thousands of function calls interleaved between other call stacks.

## Navigation

Once a profile has loaded, the main view is split into two: the top area is the "minimap", and the bottom area is the "stack view".

### Minimap Navigation
- Scroll on either axis to pan around
- Click and drag to narrow your view to a specific range

### Stack View Navigation
- Scroll on either axis to pan around
- Pinch to zoom
- Hold Cmd+Scroll to zoom

### Keyboard Navigation
- `+`: zoom in
- `-`: zoom out
- `0`: zoom out to see the entire profile
- `w`/`a`/`s`/`d` or arrow keys: pan around the profile
- `1`: Switch to the "Time Order" view
- `2`: Switch to the "Left Heavy" view