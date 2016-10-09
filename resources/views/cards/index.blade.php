@extends('layout')

@section('content')
  <h1> All cards </h1>
  @foreach ($cards as $c)
    {{-- <a href="/cards/{{$c -> id}}"> {{ $c -> name }} </a> --}}

    {{-- intend for more complicated URL --}}
    <a href="{{ $c->path() }}"> {{ $c -> name }} </a>
  @endforeach
@stop
