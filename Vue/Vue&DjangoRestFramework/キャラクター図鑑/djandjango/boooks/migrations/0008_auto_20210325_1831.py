# Generated by Django 2.2.19 on 2021-03-25 09:31

import boooks.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boooks', '0007_auto_20210325_1810'),
    ]

    operations = [
        migrations.AlterField(
            model_name='characters',
            name='file',
            field=models.FileField(blank=True, null=True, storage=boooks.storage.AsyncFileSystemStorage(), upload_to=''),
        ),
    ]
