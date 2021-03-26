from django.core.files.storage import FileSystemStorage

from .tasks import async_file_delete


class AsyncFileSystemStorage(FileSystemStorage):
    def delete(self, name):
        file_path = self.path(name)
        print(file_path)
        async_file_delete.delay(file_path)