#!/usr/bin/python
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

browser = webdriver.Firefox()
browser.get("http://localhost:5000/")
time.sleep(3) # Let the user actually see something!

registerbtn = browser.find_element_by_name('register').click();
time.sleep(3)

firstname = browser.find_element_by_name("first_name")
firstname.send_keys("testname")
lastname = browser.find_element_by_name("last_name")
lastname.send_keys("testlastname")
username = browser.find_element_by_name("username")
username.send_keys("testusername")
password = browser.find_element_by_name("password")
password.send_keys("testpassword")
email = browser.find_element_by_name("email")
email.send_keys("test@email.com")

time.sleep(5)
submitbtn = browser.find_element_by_id('submitted').click();

time.sleep(5) # Let the user actually see something!
browser.close()
