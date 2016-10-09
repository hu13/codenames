<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use DB;
use App\cards; // 'eloquent' way of accessing a db table as if each record is an object
use App\Http\Requests;

class CardsController extends Controller
{
  public function index()
  {
    // $cards = DB::table('cards')->get();
    $cards = cards::all();
    return view('cards.index', compact('cards'));
  }

  public function show(cards $card)
  {
    // $someCard = cards::find($card);
    // return view('cards.show', compact('someCard'));

    // return view('cards.show', compact('card'));
    // print($card);
    return view('cards.show')->with('card', $card);

  }

  public function notFound() {
    print('reached');

    return cards::findOrFail(22);
  }
}
