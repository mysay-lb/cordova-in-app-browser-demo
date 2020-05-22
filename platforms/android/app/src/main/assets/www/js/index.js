/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function test()
{
    var headers = [{"key":"x-mysaytoken","value":"ewogICJwaG9uZV90eXBlX2lkIiA6ICIxIiwKICAiZGV2aWNlVG9rZW4iIDogIjdmYzBiYTc2MGZlYWIyMGY2OTA0YTliN2JkNDg2MzhlNmMxMGU4OTc5YmQyMmU1MGIwYWU2NWRhZWRjYjdkY2QiLAogICJsb25naXR1ZGUiIDogIiIsCiAgIm9zVmVyc2lvbiIgOiAiVmVyc2lvbiAxMS40IChCdWlsZCAxNUY3OSkiLAogICJsYXRpdHVkZSIgOiAiIiwKICAiY291bnRyeUNvZGUiIDogImxiIiwKICAidXNlcklkIiA6ICIxMDQ5NSIsCiAgImxhbmd1YWdlIiA6ICJlbiIsCiAgImZjbVRva2VuIiA6ICJjZW5HWVFRWGFhODpBUEE5MWJIdF96YTJMYzVDbUxoQU91REJRRmJlZFdKMUpGWDhJWVJjSmh2ZFllOUZOa29yZEJCNThBeEd4SUF3cjI4ei01Wjdqb2gtNmV1YlRfT3plbXFPMjNpckEzdlFvaTc5WmF3LWZoRUduTW9zbkgwb0xOTlhEa2dFcWhMWUI2QmZ1dzVhQXN2eiIsCiAgImFwcFZlcnNpb24iIDogIjEuOTkuMSIsCiAgInZlbmRvcklkIiA6ICIwODYxQjA0QS1DQTRFLTRFMDAtQkZBMi00NUJDRTQ4Q0M0MjUiLAogICJwaG9uZU51bWJlciIgOiAiOTYxNzA1MDk0NTAiCn0="}];
    cordova.InAppBrowser.open("https://ramadan.microapp.mysayapp.com","_blank", "location=no,hidden=no",  headers, null);
}

document.getElementById('test').addEventListener('click',function(){
    test();
})
