export default function Footer(props) {
  return (
    <footer className="bg-emerald-500 py-4 px-8">
      <p>&copy;{props.copyright}</p>
    </footer>
  )
}