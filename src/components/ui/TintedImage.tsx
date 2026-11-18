type TintedImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  rounded?: string
}

export function TintedImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  rounded = 'rounded-card',
}: TintedImageProps) {
  return (
    <div className={['photo-tint relative overflow-hidden', rounded, className].join(' ')}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={['h-full w-full object-cover', imgClassName].join(' ')}
      />
    </div>
  )
}
