import pytest,time
from playwright.sync_api import Playwright, expect,Page,sync_playwright

@pytest.fixture(scope="session")
def page():
    playwright = sync_playwright().start()
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    yield page
    browser.close()
    playwright.stop()


def test_VerifyHeader(page:Page):
    header= page.get_by_role("heading", name="Practice Page")
    expect(header).to_be_visible 


def test_VerifyRadio(page:Page):
    radio2 =page.locator("//input[@value = 'radio2']")
    radio2.check()
    expect(radio2).to_be_checked()



def test_VerifySuggesstion(page:Page):
    Suggession_box=page.get_by_placeholder("Type to Select Countries")
    Suggession_box.fill("India")
    page.locator("#ui-id-1").wait_for(state="visible")
    india_in_suggessione = page.locator(".ui-menu-item-wrapper", has_text="India")
    expect(india_in_suggessione).to_be_visible

    india_option = page.get_by_text("India", exact=True)
    india_option.click()
    expect(Suggession_box).to_have_value("India")


def test_VerifyDropdown(page:Page):
   dropdown =  page.get_by_role("combobox")
   dropdown.select_option("Option2")
   expect(dropdown).to_have_value("option2")
   time.sleep(5)


def test__VerifyCheckbox(page:Page):
    checkbox2 = page.locator("#checkBoxOption2")
    checkbox2.click()
    expect(checkbox2).to_be_checked()








    
    








    



    
