import os
# The "task" is no longer in version 5.x You can use version 4.x
# pip install celery==4.4.2
from celery import task


@task
def async_file_delete(file_path):
    if os.path.exists(file_path):
        try:
            os.remove(file_path)
        except OSError:
            pass