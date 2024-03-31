# acb_pagescroll_indicator

The Page Scroll Indicator is a lightweight JavaScript package designed to enhance user experience by providing a customizable indicator that shows the progress of scrolling on a webpage. This indicator is a visual cue for users, indicating how far they have scrolled and how much content is left to view.

## Installation

Install it using below command

```bash
npm install acb_pagescroll_indicator 
```


### Add this in your html file

```html
<div class="scroll-progress" style="--color:#724bd1;--bg-color:#9274db;" id="scroll-progress"></div>
```


### Add This link tag in head section of Your HTML page

 use CDN version of CSS

```html
<link rel="stylesheet" href="https://unpkg.com/acb_pagescroll_indicator@2.0.0/css/acb_pagescroll_style.css">
```


### Add This script tag before ending of Your body tag 

 use CDN version of JavaScript

```javascript
<script src="https://unpkg.com/acb_pagescroll_indicator@2.0.0/js/acb_pagescroll.js"></script>
```


### Customize the colors

Here in HTML code you can observe "--color" and "--bg-color" css varaiable, You can add your custom colours for it.


### Shining Animation

Just add an extra class for "scroll-progress", animation class "scroll_acb_animated" like below

```html
<div class="scroll-progress scroll_acb_animated" style="--color:#724bd1;--bg-color:#9274db;" id="scroll-progress"></div>
```
