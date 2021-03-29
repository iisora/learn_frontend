from django.db import models
# from .storage import AsyncFileSystemStorage

# a_fs = AsyncFileSystemStorage()

class Characters(models.Model):
    name = models.CharField(max_length=100)
    weight = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    Habitat = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(blank=True, null=True)
    # file = models.FileField(blank=True, null=True, storage=a_fs)
    # file = models.ImageField('Uploaded image file', upload_to='.', storage=a_fs, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

    # def delete(self, *args, **kwargs):
    #     self.file.delete()
    #     super(File, self).delete()

# class Card(models.Model):
#     file = models.FileField(blank=False, null=False)
#     created_date = models.DateTimeField(auto_now_add=True)
#     modified_date = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.file.name

class Books(models.Model):
    name = models.CharField(max_length=100)
    weight = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    Habitat = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(blank=True, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name