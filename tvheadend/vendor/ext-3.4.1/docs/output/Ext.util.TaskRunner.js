/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
Ext.data.JsonP.Ext_util_TaskRunner({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":["Ext.TaskMgr"],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.TaskMgr' rel='Ext.TaskMgr' class='docClass'>Ext.TaskMgr</a></div><h4>Files</h4><div class='dependency'><a href='source/TaskMgr.html#Ext-util-TaskRunner' target='_blank'>TaskMgr.js</a></div></pre><div class='doc-contents'><p>Provides the ability to execute one or more arbitrary tasks in a multithreaded\nmanner.  Generally, you can use the singleton <a href=\"#!/api/Ext.TaskMgr\" rel=\"Ext.TaskMgr\" class=\"docClass\">Ext.TaskMgr</a> instead, but\nif needed, you can create separate instances of TaskRunner.  Any number of\nseparate tasks can be started at any time and will run independently of each\nother. Example usage:</p>\n\n<pre><code>// Start a simple clock task that updates a div once per second\nvar updateClock = function(){\n    <a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a>('clock').update(new Date().format('g:i:s A'));\n} \nvar task = {\n    run: updateClock,\n    interval: 1000 //1 second\n}\nvar runner = new <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a>();\nrunner.start(task);\n\n// equivalent using TaskMgr\n<a href=\"#!/api/Ext.TaskMgr-method-start\" rel=\"Ext.TaskMgr-method-start\" class=\"docClass\">Ext.TaskMgr.start</a>({\n    run: updateClock,\n    interval: 1000\n});\n\n</code></pre>\n\n\n<p>See the <a href=\"#!/api/Ext.util.TaskRunner-method-start\" rel=\"Ext.util.TaskRunner-method-start\" class=\"docClass\">start</a> method for details about how to configure a task object.</p>\n\n\n<p>Also see <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner'>Ext.util.TaskRunner</span><br/><a href='source/TaskMgr.html#Ext-util-TaskRunner-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.TaskRunner-method-constructor' class='name expandable'>Ext.util.TaskRunner</a>( <span class='pre'>[interval]</span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The minimum precision in milliseconds supported by this TaskRunner instance\n(defaults to 10)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner'>Ext.util.TaskRunner</span><br/><a href='source/TaskMgr.html#Ext-util-TaskRunner-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-start' class='name expandable'>start</a>( <span class='pre'>task</span> ) : Object</div><div class='description'><div class='short'>Starts a new task. ...</div><div class='long'><p>Starts a new task.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : Object<div class='sub-desc'><p>A config object that supports the following properties:<ul>\n<li><code>run</code> : Function<div class=\"sub-desc\"><p>The function to execute each time the task is invoked. The\nfunction will be called at each interval and passed the <code>args</code> argument if specified, and the\ncurrent invocation count if not.</p>\n<p>If a particular scope (<code>this</code> reference) is required, be sure to specify it using the <code>scope</code> argument.</p>\n<p>Return <code>false</code> from this function to terminate the task.</p></div></li>\n<li><code>interval</code> : Number<div class=\"sub-desc\">The frequency in milliseconds with which the task\nshould be invoked.</div></li>\n<li><code>args</code> : Array<div class=\"sub-desc\">(optional) An array of arguments to be passed to the function\nspecified by <code>run</code>. If not specified, the current invocation count is passed.</div></li>\n<li><code>scope</code> : Object<div class=\"sub-desc\">(optional) The scope (<tt>this</tt> reference) in which to execute the\n<code>run</code> function. Defaults to the task config object.</div></li>\n<li><code>duration</code> : Number<div class=\"sub-desc\">(optional) The length of time in milliseconds to invoke\nthe task before stopping automatically (defaults to indefinite).</div></li>\n<li><code>repeat</code> : Number<div class=\"sub-desc\">(optional) The number of times to invoke the task before\nstopping automatically (defaults to indefinite).</div></li>\n</ul></p>\n\n\n<p>Before each invocation, Ext injects the property <code>taskRunCount</code> into the task object so\nthat calculations based on the repeat count can be performed.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The task</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner'>Ext.util.TaskRunner</span><br/><a href='source/TaskMgr.html#Ext-util-TaskRunner-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-stop' class='name expandable'>stop</a>( <span class='pre'>task</span> ) : Object</div><div class='description'><div class='short'>Stops an existing running task. ...</div><div class='long'><p>Stops an existing running task.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : Object<div class='sub-desc'><p>The task to stop</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The task</p>\n</div></li></ul></div></div></div><div id='method-stopAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner'>Ext.util.TaskRunner</span><br/><a href='source/TaskMgr.html#Ext-util-TaskRunner-method-stopAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-stopAll' class='name expandable'>stopAll</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stops all tasks that are currently running. ...</div><div class='long'><p>Stops all tasks that are currently running.</p>\n</div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"TaskMgr.html#Ext-util-TaskRunner","filename":"TaskMgr.js"}],"linenr":1,"members":{"property":[],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Ext.util.TaskRunner","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Ext.util.TaskRunner","meta":{},"name":"start","id":"method-start"},{"tagname":"method","owner":"Ext.util.TaskRunner","meta":{},"name":"stop","id":"method-stop"},{"tagname":"method","owner":"Ext.util.TaskRunner","meta":{},"name":"stopAll","id":"method-stopAll"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.util.TaskRunner","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.util.TaskRunner","mixins":[],"mixedInto":[]});