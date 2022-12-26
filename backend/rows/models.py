from django.db import models
from groups.models import Group

# Create your models here.
class Row(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=24, blank=False, null=False)
    last_name = models.CharField(max_length=48, blank=False, null=False)
    address = models.CharField(max_length=256, null=False, default="N/A")

    def __str__(self):
        return f"Group: (id - {self.group.id}, date - {self.group.date}); Row: (id - {self.id}, Customer - {self.first_name.capitalize()} {self.last_name.capitalize()})"