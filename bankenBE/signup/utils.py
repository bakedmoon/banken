from django.core.mail import send_mail

def sendLoginLink(request,data):
    print("INSIDE MAIL LINK",request,data)
    message = 'http://'+str(request.get_host())+'login?email='+data
    send_mail('Login using this link',message,'',[data])