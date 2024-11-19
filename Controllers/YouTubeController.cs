using Microsoft.AspNetCore.Mvc;
using YoutubeExplode;
using YoutubeExplode.Videos.Streams;

namespace YtAudio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class YouTubeController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> DownloadAudio([FromQuery] string videoUrl)
        {
            System.Console.WriteLine("11111111111111111111111111111111111111111111111111111111111111");
            System.Console.WriteLine(videoUrl);
            // Verifica se a URL do vídeo foi fornecida
            if (string.IsNullOrEmpty(videoUrl))
            {
                return BadRequest("A URL do vídeo não foi fornecida.");
            }

            try
            {
                // Criar uma instância do cliente YoutubeExplode
                var youtube = new YoutubeClient();

                // Obter informações sobre o vídeo
                var video = await youtube.Videos.GetAsync(videoUrl);

                // Obter o stream de áudio com melhor qualidade
                var streamManifest = await youtube.Videos.Streams.GetManifestAsync(video.Url);
                var audioStreamInfo = streamManifest.GetAudioStreams().GetWithHighestBitrate();

                // Criar um MemoryStream para armazenar o áudio temporariamente
                var audioStream = await youtube.Videos.Streams.GetAsync(audioStreamInfo);

                // Retorna o áudio diretamente para o cliente como um arquivo para download
                return File(audioStream, "audio/mpeg", $"{video.Title}.mp3");
            }
            catch (Exception ex)
            {
                // Retorna um erro caso algo tenha dado errado
                return StatusCode(500, $"Erro ao tentar baixar o áudio: {ex.Message}");
            }
        }
    }
}
