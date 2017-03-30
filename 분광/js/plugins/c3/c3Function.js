 $(document).ready(function () {

            c3.generate({
                bindto: '#lineChart',
                data:{
                    columns: [
                        ['Wave Length', 30, 200, 100, 400, 150, 250],
                    ],
                    colors:{
                        data1: '#1a8ab3',
                    }
                }
            });

        });