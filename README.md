
##  Ska-Svg  
A library to use svg shapes in your web page in the easiest way.

### Demo
See the demo here: https://assisfery.github.io/Ska-Svg/

### Get Started
Just import the  **_Ska.css_**  and  **_Ska.js_**  file.

### Use Shape
To use a svg shape just put  **_data-ska-object="name_of_object"_**  attribute in your html container.
```
<div data-ska-object="base"></div>
```

### Colors
You can add colors class in your shapes.
```
<div data-ska-object="shape2" class="ska-red"></div>
```

### Rotate shapes
You can rotate the shapes using the below classes.
```
<div data-ska-object="base" class="ska-rotate-45"></div>
```

### Fill the width and height
Fill your shapes to its parent.
```
<div data-ska-object="wave2" class="ska-fill"></div>
```

### Fixed Shapes
You can fixed your shape in some position of its parent.
```
<div class="ska-fixed">
	<div data-ska-object="base" class="ska-fixed-top ska-fixed-left ska-fill-128px ska-fixed-backward"></div>
	<h3>Fixed Shapes</h3>
	<p>You can fixed your shape in some position of its parent.</p>	
</div>
```

### Shadow
You can shadow effects in your shapes using those classes.
```
class="ska-shadow" or class="ska-shadow-lg"
```

### Gradient
Below we have some gradient available in owr library.
```
<div data-ska-object="base" class="ska-gradient-1"></div>
```

### Custom Gradients
But you can also put your on gradient just adding  **_data-ska-gradient-start-color="colorStart"_**,  **_data-ska-gradient-end-color="colorStart"_**  attributes.
```
<div data-ska-object="shape2"
data-ska-gradient-start-color="#FB7BA2"
data-ska-gradient-end-color="#FCE043"
data-ska-gradient-rotate="45"></div>
```

### Contribute