# Generated by Django 2.2.12 on 2020-06-01 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20200601_1751'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='last_updated',
        ),
        migrations.RemoveField(
            model_name='user',
            name='timestamp_created',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.TextField(blank=True, null=True),
        ),
    ]