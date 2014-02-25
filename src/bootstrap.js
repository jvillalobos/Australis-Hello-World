/**
 * Copyright 2014 Jorge Villalobos
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

"use strict";

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource:///modules/CustomizableUI.jsm");

var console =
  Cu.import("resource://gre/modules/devtools/Console.jsm", {}).console;

function install(aData, aReason) {}

function uninstall(aData, aReason) {}

function startup(aData, aReason) {
  AusHello.init();
}

function shutdown(aData, aReason) {
  AusHello.uninit();
}

let AusHello = {
  init : function() {
    let helloButton =
      CustomizableUI.createWidget(
        { id : "aus-hello-button",
          defaultArea : CustomizableUI.AREA_NAVBAR,
          label : "Hello Button",
          tooltiptext : "Hello!",
          onCommand : function(aEvent) {
            let win = aEvent.target.ownerDocument.defaultView;

            win.alert("Hello!");
          }
        });
  },

  uninit : function() {
  }
};
