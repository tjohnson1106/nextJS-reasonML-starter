// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";

function Section(Props) {
  var title = Props.title;
  var subtitle = Props.subtitle;
  var children = Props.children;
  return React.createElement("section", undefined, React.createElement("div", {
                  className: "container"
                }, React.createElement("h1", {
                      className: "title"
                    }, title), React.createElement("h2", {
                      className: "subtitle"
                    }, subtitle, children)));
}

var make = Section;

export {
  make ,
  
}
/* react Not a pure module */
