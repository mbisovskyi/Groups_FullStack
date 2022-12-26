from django.db import models
from authentication.models import User
# Create your models here.
class Group(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.TimeField(null=False)
    end_time = models.TimeField(null=False)
    date = models.DateField(blank=True, null=False)
    max_rows = models.IntegerField(null=False)


    class Meta:
        verbose_name = "Users Group"

    def __str__(self):
        return f"{self.user.username.capitalize()}'s (id - {self.user.id}) Group id - {self.id}"