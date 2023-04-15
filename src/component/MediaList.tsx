export default function MediaList({ mediaItems }: { mediaItems: any[] }) {
    return <ul>
      {
        mediaItems.map((media, index) => (
          <li key={index}>
            <h1 className="text-xl font-bold">{media.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: media.description.rendered}}/>
          </li>
        ))
      }
    </ul>
}