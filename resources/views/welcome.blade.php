@extends('layout')
@section('header')
  <style>
    #app{
      padding-top: 1%;
    }

    #newGameBt{
      padding-left: 45.5%;
    }

    #cards{
      background-color: #4d220d;
    }

    #cardAfter{
      border: 50px;
      border-color: blue;

    }
  </style>
@stop
@section('content')
  <div id="app">
    {{-- <button @click="showModal"></button> --}}
    <div class="ui basic modal">
      <i class="close icon"></i>
      <div class="ui header">
        Oh snap, you've just got your bae killed!
      </div>
      <div class="image content">
        <div class="image">
          <i class="frown icon"></i>
        </div>
        <div class="description">
          <p>Rest in Peace.</p>
        </div>
      </div>
    </div>

    <div class="ui float message">
      <div class="ui five link cards">
        @for($i=0; $i < 25; $i++)
          <div class="card" id="cards">

            {{-- before revealing --}}
            <div class="content" v-show="!isPicked({{$i}})">
              <div class="ui mini bordered images">

                <span data-tooltip="Is it me?">
                  <img src="/img/agents/red.jpg" @click="revealAgent('/img/agents/red.jpg','agentId{{$i}}',{{$i}})">
                </span>

                <span data-tooltip="Is it me?">
                  <img src="/img/agents/blue.jpg" @click="revealAgent('/img/agents/blue.jpg','agentId{{$i}}',{{$i}})">
                </span>

                <span data-tooltip="Is it me?">
                  <img src="/img/agents/bystander.jpg" @click="revealAgent('/img/agents/bystander.jpg','agentId{{$i}}',{{$i}})">
                </span>


                <img src="/img/agents/assassin.jpeg" class="right floated" @click="showModal">


              </div>
            </div>

            <div class="content" v-show="!isPicked({{$i}})">
              <img id="agentId{{$i}}" class="ui mini circular fluid image">
              <h4 class="right floated ui orange header">
                <span v-text="randomWords[{{$i}}]"></span>
              </h4>
            </div>


            {{-- after revealing --}}
            <div class="ui fluid slide masked reveal" v-show="isPicked({{$i}})">
              <div class="hidden content">
                <a @click="resetCard('agentId{{$i}}',{{$i}})"><i class="circular undo icon"></i></a>
                <div class="ui horizontal divider">
                    <a class="ui brown large right floated basic label">
                      <span v-text="randomWords[{{$i}}]"></span>
                    </a>
                </div>
              </div>

              <div class="visible content" id="cardAfter">
                <div class="ui segment">
                  <img id="{{$i}}" class="ui centered small circular image">
                </div>
              </div>
            </div>

          </div>
        @endfor
      </div>
    </div>

    <div id="newGameBt">
      <button class="ui grey button" @click="newRound">New Round</button>
    </div>

  </div>

  <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.9.3/vue-resource.js"></script>
  <script src="/js/board.js"></script>
  <script type="text/javascript">run();</script>

@stop
