<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Note;

//model a record of cards table
class cards extends Model
{
  public function notes()
  {
    return $this->hasMany(Note::class);
  }

  public function path()
  {
    return '/cards/' . $this->id; // string concatenation
  }
}
