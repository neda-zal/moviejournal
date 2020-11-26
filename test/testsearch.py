#!/usr/bin/python
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

browser = webdriver.Firefox()
browser.get("http://localhost:5000/")
time.sleep(3) # Let the user actually see something!

search = browser.find_element_by_name("search")
search.send_keys("the shining")

search.submit()

time.sleep(5)
browser.close()
