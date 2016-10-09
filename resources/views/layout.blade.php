<!DOCTYPE html>
<html>
  <head>

    {{-- <link rel="stylesheet" href="/css/style.css"> --}}
    {{-- <link rel="stylesheet" href="/css/app.css"> --}}

    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <!-- ensure proper rendering and touch zooming for all devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    @yield('header')
    <!-- semantic ui -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.1/semantic.css">


  </head>
  <body>

    @yield('content')
    @yield('about only')

    {{-- <script src="/cr/js/util.js"></script> --}}
    <!-- jQuery first, then Bootstrap JS. -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

    <!-- semantic ui js -->
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.1/components/accordion.js"></script> --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.1/semantic.js"></script>

  </body>

</html>
