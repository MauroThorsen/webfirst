import pymysql.cursors

# 连接数据库
'''connect = pymysql.Connect(
    host='localhost',
    port=3306,
    user='root',
    passwd='123456',
    db='python',
    charset='utf8'
)

cursor = connect.cursor()'''

from selenium import webdriver
browser=webdriver.Firefox()
browser.get('http://localhost:8000')
assert 'Django' in browser.title