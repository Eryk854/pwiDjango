import mimetypes

from django.shortcuts import render, HttpResponse
from django.utils.encoding import smart_str
from django.core.files import File
from django.templatetags.static import static
from wsgiref.util import FileWrapper
import os
# Create your views here.


def index(request):
    return render(request, 'app/index.html')


def memory(request):
    return render(request, 'app/memory.html')


def form(request):
    return render(request, 'app/form.html')

def download_file(request):
    file_name = 'kody.zip'
    #path_to_file = static('app/images/tronn.png')
    path_to_file =static('test.zip')
    print(path_to_file)
    response = HttpResponse(content_type='application/force-download')
    response['Content-Disposition'] = 'attachment; filename=%s' % smart_str(file_name)
    response['X-Sendfile'] = smart_str(path_to_file)
    return response
