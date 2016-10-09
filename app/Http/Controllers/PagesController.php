<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PagesController extends Controller
{
  public function home()
  {
    $fruit = ['apple','notApple'];
    $people = ['me','others'];
    return view('welcome', compact('fruit'), compact('people'));
  }

  public function about()
  {
    return view('pages.about');
  }
}
