/\*\*/ {{ if .Params.one_image.img }}

<section class="one-image">
  <div class="small-container">
    <h2 class="one-image__title">{{ .Params.one_image.title }}</h2>
    <div class="one-image__img">
      <img src="{{ .Params.one_image.img }}" alt="security image" />
    </div>
  </div>
</section>

{{end}} {{ if eq .Hero.show "true"}} {{end}}
