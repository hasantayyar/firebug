function runTest()
{
    FBTest.sysout("console.log.START");
    FBTest.openNewTab(basePath + "console/api/log.html", function(win)
    {
        FBTest.openFirebug();
        FBTest.enableConsolePanel(function(win)
        {
            var config = {tagName: "div", classes: "logRow logRow-log"};
            FBTest.waitForDisplayedElement("console", config, function(row)
            {
                var expected = /This is a test log\s*/;
                FBTest.compare(expected, row.textContent, "The proper message must be displayed.");
                FBTest.testDone("console.log.DONE");
            });

            // Execute test implemented on the test page.
            FBTest.click(win.document.getElementById("testButton"));
        });
    });
}
