@extends('layout')

@section('content')
  {{-- {{ $someCard }} --}}
  {{ $card->name }}
  @foreach ( $card->notes as $note  )
    <li> {{ $note -> body }} </li>
  @endforeach
@stop
