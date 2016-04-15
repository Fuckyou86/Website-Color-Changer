import React from 'react'
import ReactDOM from 'react-dom'
import Colors from './utils.js'
import {ColorsList, Chart, Tabs} from './ui.js'

window.onload = function() {
	// var colors = Colors.getColorsOfDomElement(document);
	var colors = JSON.parse('{"text":{"#000":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#333333":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{}],"#ffffff":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#515151":[{},{},{},{},{},{}],"#428bca":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#577171":[{},{}],"#daddd2":[{},{}],"#a8eceb":[{},{},{},{}],"#f7271":[{},{},{},{},{},{},{},{},{},{}],"#f7efb8":[{},{},{},{}],"#7e6e7":[{},{},{},{},{},{},{},{}],"#38595b":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#76b3b2":[{},{},{}],"#44795":[{},{},{},{},{},{},{},{}],"#2f908f":[{},{},{},{},{},{},{}],"#639a62":[{}],"#4a8080":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#555555":[{},{},{}],"#315356":[{},{},{},{}]},"background":{"#000":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{}],"#f6f4e6":[{}],"#ededed":[{},{},{},{}],"#7dbf6b":[{},{},{},{},{},{},{},{},{},{}],"#dddddd":[{}],"#f5f4e7":[{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"#315356":[{},{},{}],"#5aa147":[{}],"#05352":[{},{}],"#368da3":[{},{},{},{},{}],"#433e2":[{},{}],"#c6b651":[{},{},{},{}],"#ffffff":[{},{},{},{},{}],"#13483":[{},{}],"#48adad":[{}],"#faffbd":[{},{}],"#4264ca":[{},{}],"#4fccff":[{},{}],"#187492":[{},{}],"#f3f1e5":[{}]}}');
	const tabsContainerNode =  document.getElementById('tabs-container');
	const colosListContainerNode = document.getElementById('colors-list-container');

	const defaultColor = 'all';
	const colorSetsNames = Object.keys(colors);
	colorSetsNames.unshift(defaultColor);
	
	ReactDOM.render(React.createElement(Tabs, {items: colorSetsNames, default: defaultColor}), tabsContainerNode);
	ReactDOM.render(React.createElement(ColorsList, {colors: colors}), colosListContainerNode);
	new Chart(colors, defaultColor);
};
