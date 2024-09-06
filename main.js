document.getElementById('btn').addEventListener('click', function() {
    const groupInput = document.getElementById('groupInput').value.toUpperCase();
    const resultDiv = document.getElementById('result');

    const groups = {
        'FE201': { name: 'Səhər qrupu', className: 'seher' },
        'FE122': { name: 'Günorta qrupu', className: 'gunorta' },
        'FE444': { name: 'Axşam qrupu', className: 'axsam' },
        'FE234': { name: 'Günorta qrupu', className: 'gunorta' },
        'FE885': { name: 'Axşam qrupu', className: 'axsam' },
        'FE826': { name: 'Səhər qrupu', className: 'seher' },
        'FE835': { name: 'Axşam qrupu', className: 'axsam' },
        'FE551': { name: 'Günorta qrupu', className: 'gunorta' },
        'FE656': { name: 'Axşam qrupu', className: 'axsam' },
        'FE897': { name: 'Axşam qrupu', className: 'axsam' }
    };

    if (groups[groupInput]) {
        const group = groups[groupInput];
        const groupNameElement = document.createElement('p');
        groupNameElement.className = group.className;
        groupNameElement.textContent = group.name;
        resultDiv.innerHTML = '';
        resultDiv.appendChild(groupNameElement);
    } else {
        alert('Yanlış qrup adı daxil etdiniz');
    }
});
