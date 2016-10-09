<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\cards;

class Note extends Model
{

  protected $fillable = ['body']; // allow to fill body attribute and prevent SQL injection

  // function name must match table name
  public function cards() {
    return $this->belongsTo(cards::class);
  }
}
