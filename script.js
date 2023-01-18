const noteForm = document.getElementById("noteForm");
const notesContainer = document.querySelector(".notes");
const noteInput = noteForm["note"];
const titleInput = noteForm["title"];

const notes = JSON.parse(localStorage.getItem("notes")) || [];

const addNote = (title, note) => {
    notes.push({
        title,
        note
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    return {title, note}
};

const createNoteElement = ({title, note}) => {
    const noteDiv = document.createElement("div");
    const titleCreate = document.createElement("h1")
    const NOTE = document.createElement("h2");

    titleCreate.innerText = title;
    NOTE.innerText = "• " + note;

    noteDiv.append(titleCreate, NOTE);
    notesContainer.appendChild(noteDiv);
    notesContainer.style.design = notes.length === 0 ? "none" : "flex";
};

notesContainer.style.display = notes.length === 0 ? "none" : "flex";
notes.forEach(createNoteElement);
noteForm.onsubmit = e => {
    e.preventDefault();
    const newNote = addNote(
        titleInput.value,
        noteInput.value
    );
    createNoteElement(newNote);
    titleInput.value = "";
    noteInput.value = "";
    location.reload();
};

function deleteItems() {
    localStorage.clear();
    location.reload()
}