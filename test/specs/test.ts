describe("suite",()=>{
    it("test",async ()=>{
        await browser.pause(5000);
        const eleID = 'id=com.android.permissioncontroller:id/permission_deny_button';
        const dontallow=await $(eleID);
        await dontallow.click();

    })
    it('should tap on specific coordinates', async () => {
        await browser.pause(2000);
        await browser.touchAction({
            action: 'tap',
            x:965,
            y:1980
        })
        await browser.pause(2000);
      });
      it('should tap on specific coordinates', async () => {
        await browser.pause(1000);
      
        for (let i = 0; i < 5; i++) {
          const button = await $('//android.widget.TextView[contains(@class, "android.widget.TextView") and @text="Continue"]');
          await button.click();
          await browser.pause(2000);
        }
      });
       it('should tap on settings', async () => {
            await browser.pause(1000);
            const button = await $('//android.widget.TextView[contains(@class, "android.widget.TextView") and @text="Settings"]');
            await button.click();
            await browser.pause(1000);
            const Manageaccount = await $('//android.widget.TextView[contains(@class, "android.widget.TextView") and @text="Manage account"]');
            await Manageaccount.click();
            await browser.pause(1000);
            const signin = await $('//android.widget.TextView[contains(@class, "android.widget.TextView") and @text="Sign in"]');
            await signin.click();
            await browser.pause(1000);
            const eleID = 'id= com.android.chrome:id/terms_accept';
            const agree=await $(eleID);
            await agree.click();
           
            


          });
      })
    
      it('Scroll to recent issues',  async () =>  {
        //var elem = $('//android.widget.TextView[contains(@class, "android.widget.TextView") and @text="Recent issues"]');
        for (let i = 0; i < 2; i++) {
        const startY = 1998; // Y-coordinate for the starting point
        const endY = 332; // Y-coordinate for the ending point
        const duration = 800; // Duration of the swipe in milliseconds

        browser.touchAction([
            { action: 'press', x: 100, y: startY }, // Specify the starting point (x, y)
            { action: 'wait', ms: duration }, // Wait for the specified duration
            { action: 'moveTo', x: 100, y: endY }, // Specify the ending point (x, y)
            'release', // Release the touch action
            ]);
        await browser.pause(3000);
        }
          
    });
    it('Scroll to see more',  async () =>  {
        //var elem = $('//android.widget.TextView[contains(@class, "android.widget.TextView") and @text="Recent issues"]');
        for (let i = 0; i < 2; i++) {
        const startY = 835; // Y-coordinate for the starting point
        const endY = 835; // Y-coordinate for the ending point
        const duration = 800; // Duration of the swipe in milliseconds

        browser.touchAction([
            { action: 'press', x: 100, y: startY }, // Specify the starting point (x, y)
            { action: 'wait', ms: duration }, // Wait for the specified duration
            { action: 'moveTo', x: 100, y: endY }, // Specify the ending point (x, y)
            'release', // Release the touch action
            ]);
        await browser.pause(3000);
        }
          
    });
})

