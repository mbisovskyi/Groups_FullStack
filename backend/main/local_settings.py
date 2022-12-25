# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-75fzgol_y)mdtd1*^!ojn1r)awn@1_9jjqbtk$1+b98vtl0#86'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'groupsapp_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
        'OPTIONS': {
            'autocommit': True
        }
    }
}
