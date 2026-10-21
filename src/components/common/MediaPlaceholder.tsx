export function MediaPlaceholder({ src, label, className = '' }: { src: string; label: string; className?: string }) {
  return (
    <figure
      className={`media ${className}`}
      data-placeholder-label={label}
      aria-label={`${label}: gambar ilustrasi, bukan dokumentasi sekolah`}
    >
      <img src={src} alt="Foto ilustrasi pendidikan, bukan dokumentasi SMP YPPI Ar Rahmah" />
    </figure>
  );
}
