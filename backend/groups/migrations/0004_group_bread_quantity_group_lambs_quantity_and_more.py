# Generated by Django 4.0.4 on 2022-12-31 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0003_alter_group_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='bread_quantity',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='group',
            name='lambs_quantity',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='group',
            name='pigs_quantity',
            field=models.FloatField(default=0),
        ),
    ]
