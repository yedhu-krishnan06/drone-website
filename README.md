# GYROWING | FISAT Drone Team website

A static website (HTML, CSS and JavaScript only). No build step is needed.

## Run locally
Open `index.html` in a browser. For best results use VS Code Live Server. The 3D drone loads Three.js and the fonts from a CDN, so you need internet access.

## Files
- `index.html`: page content (about, aircraft, departments, sponsors, gallery, contact, footer)
- `styles.css`: all styling. Colours are the variables at the top (`--o` is the orange accent)
- `script.js`: department data, the 3D blueprint quadcopter and the page behaviour
- `assets/`: logo (transparent PNG) and photos

## Things to fill in
1. **Hero background video:** save your video as `assets/hero-drone.mp4` (MP4, H.264, 1920x1080, 10-30 s, no audio). Until it exists, the photo `assets/drone-ground.jpg` is shown.
2. **Team members:** in `script.js`, find the `dlg.innerHTML` template (search for `Member name`). Replace the four placeholder blocks with real names, roles and `<img>` photos for each department.
3. **Department text:** edit the `D` array at the top of `script.js`.
4. **3D model markers:** edit the `H` array in `script.js` to change the component names and descriptions.
5. **Gallery:** in `index.html`, the `id="gt"` block holds the images. Replace a `<div class="ph">` with `<figure><img src="assets/your-photo.jpg" alt="..."></figure>`. Videos can use a `<figure><video src="assets/clip.mp4" muted loop playsinline controls></video></figure>` and the `.gt video` style (copy the `.gt img` rule in `styles.css`).
6. **LinkedIn:** replace the "LinkedIn coming soon" text in the Contact section and the footer with a link.
7. **Sponsors:** replace the "Your logo here" boxes and edit the "Why sponsor us?" cards in `index.html`.

## Contact details used
- Email: gyrowingfisat@gmail.com
- Instagram: https://www.instagram.com/gyrowing_fisat

## 3D model note
The quadcopter is a generic concept model built from simple geometry. It is not the team's exact aircraft or a dimensionally accurate CAD model.

## Publish on GitHub Pages
1. Create a repository, e.g. `gyrowing-website`, and upload all files keeping the folder structure.
2. Open Settings, then Pages.
3. Under Build and deployment choose "Deploy from a branch", select `main` and `/ (root)`, then Save.
4. GitHub gives you the site URL.
