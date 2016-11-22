import os
import time
import datetime
import logging
import webapp2

from google.appengine.api import mail
from google.appengine.api import users
from google.appengine.ext import ndb
from google.appengine.ext.webapp import template

###############################################################################
# retrieve and render a template.
def render_template(handler, templatename, templatevalues={}):
	path = os.path.join(os.path.dirname(__file__), '', templatename)
	html = template.render(path, templatevalues)
	handler.response.out.write(html)
    
###############################################################################
class MainHandler(webapp2.RequestHandler):
    def get(self):
        params = {
        }
        render_template(self, 'index.html', params)
#        
class ContactHandler(webapp2.RequestHandler):
    def get(self):
        params = {
            
        }
        render_template(self, 'index.html', params)
        
    def post(self):
        print "hello"
        sender_email = self.request.get('email')
        subject = self.request.get('subject')
        content = self.request.get('content')
        mail.send_mail(sender="anything@meetcharlottechen2.appspotmail.com", 
                       to="charlottechen21@gmail.com", 
                       subject=subject, 
                       body="Email from: " + sender_email + "\n\n" + content)
#        render_template(self, 'index.html', {})
        self.redirect('/')
        
        
###############################################################################
mappings = [
	('/', MainHandler),
    ('/contact', ContactHandler),
]
app = webapp2.WSGIApplication(mappings, debug=True)

