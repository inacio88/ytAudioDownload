FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 8080
WORKDIR /app
COPY ./app ./
ENTRYPOINT ["dotnet", "YtAudio.dll"]