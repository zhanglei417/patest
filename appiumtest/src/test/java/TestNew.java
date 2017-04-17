
 
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


public class TestNew {
	
    @BeforeMethod(alwaysRun=true)
 
    @AfterMethod(alwaysRun=true)
    public void tearDown() throws Exception {
    }
 
    @Test(groups={"addContact"})
    public void addContact() throws InterruptedException{
    	Thread.sleep(3000);
    }
    
    @Test(groups={"addContact2"})
    public void addContact2() throws InterruptedException{
    }
}

