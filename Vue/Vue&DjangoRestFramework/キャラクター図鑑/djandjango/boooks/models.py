from django.db import models

class Characters(models.Model):
    name = models.CharField(max_length=100)
    weight = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    Habitat = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name