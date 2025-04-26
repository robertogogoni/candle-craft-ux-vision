
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Replicate from "https://esm.sh/replicate@0.25.2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const REPLICATE_API_KEY = Deno.env.get('REPLICATE_API_KEY')
    if (!REPLICATE_API_KEY) {
      throw new Error('REPLICATE_API_KEY is not set')
    }

    const replicate = new Replicate({
      auth: REPLICATE_API_KEY,
    })

    const prompts = [
      "A luxurious handcrafted soy candle in a clear glass jar with a warm, golden glow, elegant packaging, minimalist design, product photography style",
      "An arrangement of artisanal candles in various sizes with natural botanical elements, soft lighting, high-end lifestyle photography",
      "A cozy living room interior with lit scented candles creating a warm ambiance, interior design photography",
      "Close-up of a hand-poured candle making process with natural wax and essential oils, craft photography",
      "A collection of premium candle packaging with gold foil details and sophisticated branding, product photography",
      "Atmospheric shot of multiple candles creating a serene spa-like setting with soft bokeh effects"
    ]

    const results = []
    for (const prompt of prompts) {
      const output = await replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        {
          input: {
            prompt: prompt,
            width: 1024,
            height: 1024,
            num_outputs: 1,
            scheduler: "K_EULER",
            num_inference_steps: 50,
            guidance_scale: 7.5
          }
        }
      )
      results.push({ prompt, output })
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    })
  }
})
