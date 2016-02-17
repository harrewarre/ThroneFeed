# ThroneFeed

## A Nuclear Throne Streaming overlay

Vlambeer's [Nuclear Throne](http://nuclearthrone.com/) exposes it's realtime data to [Thronebutt](http://thronebutt.com).

This webapp uses that live data to generate an overlay that you can display on your OBS stream while playing Nuclear Throne on Twitch (or other service).

The live version of this app is running here: [Thronefeed](http://thronefeed.azurewebsites.net)

![ThroneFeed](http://www.thronefeed.net/Assets/help/art.png)

## Requirements

This is an ASP.NET web app, you can host this in IIS, on Azure or just run it locally from
Visual Studio in IIS Express.

1. .NET 4.5.2

For the overlay you need

1. Nuclear Throne **UPDATE 98** or higher.
2. OBS with the CLR Browsersource plugin (or other streaming software that supports web content)