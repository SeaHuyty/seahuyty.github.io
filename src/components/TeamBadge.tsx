function TeamBadge({
  label,
  href,
  logoSrc,
  logoAlt,
  name,
}: {
  label: string;
  href?: string;
  logoSrc: string;
  logoAlt: string;
  name: string;
}) {
  const badgeClassName =
    "flex items-center gap-1.5 bg-gray-400/20 dark:bg-gray-900/80 rounded px-2 py-1";
  const badgeContent = (
    <>
      <img src={logoSrc} alt={logoAlt} className="h-5 sm:h-6 w-auto" />
      <span className="font-semibold text-sm text-gray-500 dark:text-gray-400">{name}</span>
    </>
  );

  return (
    <div className="mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
      {label}
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={badgeClassName}>
          {badgeContent}
        </a>
      ) : (
        <span className={badgeClassName}>{badgeContent}</span>
      )}
    </div>
  );
}

export default TeamBadge;
